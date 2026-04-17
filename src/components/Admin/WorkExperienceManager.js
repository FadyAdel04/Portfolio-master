import React, { useState, useEffect } from "react";
import { Table, Button, Form, Modal } from "react-bootstrap";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { supabase } from "../../utils/supabase";

const expSchema = z.object({
  title: z.string().min(1, "Title is required"),
  company: z.string().min(1, "Company is required"),
  duration: z.string().min(1, "Duration is required"),
  type: z.string().min(1, "Type is required"),
  roles_input: z.string().min(1, "At least one role point is required")
});

function WorkExperienceManager() {
  const [experiences, setExperiences] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const { control, handleSubmit, reset, setValue, formState: { errors } } = useForm({
    resolver: zodResolver(expSchema),
    defaultValues: { title: "", company: "", duration: "", type: "", roles_input: "" }
  });

  useEffect(() => {
    fetchExperiences();
  }, []);

  const fetchExperiences = async () => {
    const { data } = await supabase.from("work_experience").select("*").order("created_at", { ascending: false });
    if (data) setExperiences(data);
  };

  const handleShow = (exp = null) => {
    if (exp) {
      setEditingId(exp.id);
      setValue("title", exp.title);
      setValue("company", exp.company);
      setValue("duration", exp.duration || "");
      setValue("type", exp.type || "");
      setValue("roles_input", exp.roles ? exp.roles.join("\n") : "");
    } else {
      setEditingId(null);
      reset();
    }
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    reset();
  };

  const onSubmit = async (formData) => {
    const rolesArray = formData.roles_input.split("\n").map(s => s.trim()).filter(Boolean);
    const dbData = {
      title: formData.title,
      company: formData.company,
      duration: formData.duration,
      type: formData.type,
      roles: rolesArray
    };

    if (editingId) {
      const { error } = await supabase.from("work_experience").update(dbData).match({ id: editingId });
      if (error) alert(error.message);
    } else {
      const { error } = await supabase.from("work_experience").insert([dbData]);
      if (error) alert(error.message);
    }
    fetchExperiences();
    handleClose();
  };

  const handleDelete = async (id) => {
    if (window.confirm("Delete this experience?")) {
      await supabase.from("work_experience").delete().match({ id });
      fetchExperiences();
    }
  };

  const filteredExps = experiences.filter(e => 
    e.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    e.company?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    e.type?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h4>Manage Work Experience</h4>
        <div className="d-flex gap-3">
          <Form.Control 
            type="text" 
            placeholder="Search experience..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ width: '300px', backgroundColor: '#1a1a1a', color: 'white', borderColor: '#c770f0' }}
          />
          <Button variant="success" onClick={() => handleShow()}>Add New Experience</Button>
        </div>
      </div>

      <Table striped bordered hover variant="dark" responsive>
        <thead>
          <tr>
            <th>Title</th>
            <th>Company</th>
            <th>Duration</th>
            <th>Type</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredExps.map((e) => (
            <tr key={e.id}>
              <td>{e.title}</td>
              <td>{e.company}</td>
              <td>{e.duration}</td>
              <td>{e.type}</td>
              <td>
                <Button variant="info" size="sm" className="me-2" onClick={() => handleShow(e)}>Edit</Button>
                <Button variant="danger" size="sm" onClick={() => handleDelete(e.id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={showModal} onHide={handleClose} variant="dark">
        <Modal.Header closeButton className="bg-dark text-white text-dark-close">
          <Modal.Title>{editingId ? "Edit Experience" : "Add Experience"}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-dark text-white">
          <Form onSubmit={handleSubmit(onSubmit)}>
            
            <Form.Group className="mb-3">
              <Form.Label>Job Title</Form.Label>
              <Controller name="title" control={control} render={({ field }) => (
                <Form.Control {...field} isInvalid={!!errors.title} />
              )} />
              <Form.Control.Feedback type="invalid">{errors.title?.message}</Form.Control.Feedback>
            </Form.Group>
            
            <Form.Group className="mb-3">
              <Form.Label>Company</Form.Label>
              <Controller name="company" control={control} render={({ field }) => (
                <Form.Control {...field} isInvalid={!!errors.company} />
              )} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Duration (e.g. Aug 2024 - Oct 2024)</Form.Label>
              <Controller name="duration" control={control} render={({ field }) => (
                <Form.Control {...field} isInvalid={!!errors.duration} />
              )} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Job Type / Location (e.g. Internship Remotely)</Form.Label>
              <Controller name="type" control={control} render={({ field }) => (
                <Form.Control {...field} isInvalid={!!errors.type} />
              )} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Roles / Achievements (One per line)</Form.Label>
              <Controller name="roles_input" control={control} render={({ field }) => (
                <Form.Control as="textarea" rows={4} {...field} isInvalid={!!errors.roles_input} placeholder="Reduced database query response time by 20%...&#10;Collaborated with senior developers..." />
              )} />
              <Form.Control.Feedback type="invalid">{errors.roles_input?.message}</Form.Control.Feedback>
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100 mt-3">Save Experience</Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default WorkExperienceManager;
