import React, { useState, useEffect } from "react";
import { Table, Button, Form, Modal, Badge } from "react-bootstrap";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { supabase } from "../../utils/supabase";

const projectSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  category: z.string().optional(),
  gh_link: z.string().optional(),
  demo_link: z.string().optional(),
  img_url: z.string().optional(),
  skills_input: z.string().optional(),
  tools_input: z.string().optional(),
  features_input: z.string().optional(),
  images_input: z.string().optional(),
  date: z.string().optional(),
});

function ProjectsManager() {
  const [projects, setProjects] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const { control, handleSubmit, reset, setValue, getValues, formState: { errors } } = useForm({
    resolver: zodResolver(projectSchema),
    defaultValues: {
      title: "", description: "", category: "", gh_link: "", demo_link: "", img_url: "",
      skills_input: "", tools_input: "", features_input: "", images_input: ""
    }
  });

  const [uploading, setUploading] = useState(false);
  const [uploadStatus, setUploadStatus] = useState("");

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    const { data } = await supabase.from("projects").select("*").order("created_at", { ascending: false });
    if (data) setProjects(data);
  };

  const handleFileUpload = async (event, fieldName) => {
    const files = event.target.files;
    if (!files || files.length === 0) return;
    
    setUploading(true);
    const urls = [];
    const total = files.length;

    for (let i = 0; i < total; i++) {
      const file = files[i];
      setUploadStatus(`Uploading ${i + 1} of ${total}...`);
      
      const fileExt = file.name.split('.').pop();
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;
      const filePath = `projects/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from('portfolio-images')
        .upload(filePath, file);

      if (uploadError) {
        console.error("Upload Error:", uploadError);
        alert(`Failed to upload ${file.name}: ${uploadError.message}`);
        continue;
      }

      const { data: { publicUrl } } = supabase.storage
        .from('portfolio-images')
        .getPublicUrl(filePath);
      
      urls.push(publicUrl);
    }

    if (fieldName === 'images_input') {
      const currentVal = getValues("images_input") || "";
      const newUrls = urls.join(", ");
      setValue("images_input", currentVal ? `${currentVal}, ${newUrls}` : newUrls);
    } else {
      setValue(fieldName, urls[0]);
    }
    setUploading(false);
    setUploadStatus("");
  };

  const handleShow = (project = null) => {
    if (project) {
      setEditingId(project.id);
      setValue("title", project.title);
      setValue("description", project.description);
      setValue("category", project.category || "");
      setValue("gh_link", project.gh_link || "");
      setValue("demo_link", project.demo_link || "");
      setValue("img_url", project.img_url || "");
      setValue("date", project.date || "");
      setValue("skills_input", (project.skills || []).join(", "));
      setValue("tools_input", (project.tools || []).join(", "));
      setValue("features_input", (project.key_features || []).join(" | "));
      setValue("images_input", (project.image_paths || []).join(", "));
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
  const onSubmit = async (data) => {
    const parsedData = {
      title: data.title,
      description: data.description,
      category: data.category,
      gh_link: data.gh_link,
      demo_link: data.demo_link,
      img_url: data.img_url,
      date: data.date,
      // Store lists as arrays (Supabase handles this if JSONB or TEXT[])
      skills: data.skills_input ? data.skills_input.split(",").map(s => s.trim()).filter(Boolean) : [],
      tools: data.tools_input ? data.tools_input.split(",").map(s => s.trim()).filter(Boolean) : [],
      image_paths: data.images_input ? data.images_input.split(",").map(s => s.trim()).filter(Boolean) : [],
      key_features: data.features_input ? data.features_input.split("|").map(s => s.trim()).filter(Boolean) : [],
    };

    console.log("Saving Project Data:", parsedData);

    let error;
    if (editingId) {
      const { error: updateError } = await supabase.from("projects").update(parsedData).match({ id: editingId });
      error = updateError;
    } else {
      const { error: insertError } = await supabase.from("projects").insert([parsedData]);
      error = insertError;
    }

    if (error) {
      console.error("Supabase Save Error:", error);
      alert("Error saving to database: " + error.message);
    } else {
      fetchProjects();
      handleClose();
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure?")) {
      await supabase.from("projects").delete().match({ id });
      fetchProjects();
    }
  };

  const filteredProjects = projects.filter(p => 
    p.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.category?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.description?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h4>Manage Projects</h4>
        <div className="d-flex gap-3">
          <Form.Control 
            type="text" 
            placeholder="Search projects..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ width: '300px', backgroundColor: '#1a1a1a', color: 'white', borderColor: '#c770f0' }}
          />
          <Button variant="success" onClick={() => handleShow()}>Add New Project</Button>
        </div>
      </div>

      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Title</th>
            <th>Category</th>
            <th>Demo Link</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredProjects.map((p) => (
            <tr key={p.id}>
              <td>{p.title}</td>
              <td>{p.category}</td>
              <td>{p.demo_link && <a href={p.demo_link} target="_blank" rel="noreferrer">View</a>}</td>
              <td>
                <Button variant="info" size="sm" className="me-2" onClick={() => handleShow(p)}>Edit</Button>
                <Button variant="danger" size="sm" onClick={() => handleDelete(p.id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={showModal} onHide={handleClose} variant="dark">
        <Modal.Header closeButton className="bg-dark text-white text-dark-close">
          <Modal.Title>{editingId ? "Edit Project" : "Add Project"}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-dark text-white">
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Controller name="title" control={control} render={({ field }) => (
                <Form.Control {...field} isInvalid={!!errors.title} />
              )} />
              <Form.Control.Feedback type="invalid">{errors.title?.message}</Form.Control.Feedback>
            </Form.Group>
            
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Controller name="description" control={control} render={({ field }) => (
                <Form.Control as="textarea" rows={3} {...field} isInvalid={!!errors.description} />
              )} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Category</Form.Label>
              <Controller name="category" control={control} render={({ field }) => (
                <Form.Control {...field} />
              )} />
            </Form.Group>
            
            <Form.Group className="mb-3">
              <Form.Label>Date</Form.Label>
              <Controller name="date" control={control} render={({ field }) => (
                <Form.Control {...field} placeholder="e.g. November 2024" />
              )} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Skills (Comma-separated)</Form.Label>
              <Controller name="skills_input" control={control} render={({ field }) => (
                <Form.Control {...field} placeholder="React, Next.js, Tailwind..." />
              )} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Tools (Comma-separated)</Form.Label>
              <Controller name="tools_input" control={control} render={({ field }) => (
                <Form.Control {...field} placeholder="VS Code, GitHub, Figma..." />
              )} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Key Features (| separated)</Form.Label>
              <Controller name="features_input" control={control} render={({ field }) => (
                <Form.Control as="textarea" rows={3} {...field} placeholder="Feature Title: Description | Feature 2: Description | Feature 3..." />
              )} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Main Cover Image (Supabase Storage)</Form.Label>
              <div className="d-flex mb-2 align-items-center">
                <Form.Control type="file" onChange={(e) => handleFileUpload(e, "img_url")} disabled={uploading} accept="image/*" />
                {uploadStatus && <Badge bg="info" className="ms-2">{uploadStatus}</Badge>}
              </div>
              <Controller name="img_url" control={control} render={({ field }) => (
                <Form.Control {...field} placeholder="Or paste link here" />
              )} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Gallery Photos (Select multiple)</Form.Label>
              <div className="d-flex mb-2 align-items-center">
                <Form.Control type="file" onChange={(e) => handleFileUpload(e, "images_input")} disabled={uploading} accept="image/*" multiple />
                {uploadStatus && <Badge bg="info" className="ms-2">{uploadStatus}</Badge>}
              </div>
              <Controller name="images_input" control={control} render={({ field }) => (
                <Form.Control as="textarea" rows={3} {...field} placeholder="https://..., https://..." />
              )} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>GitHub URL</Form.Label>
              <Controller name="gh_link" control={control} render={({ field }) => (
                <Form.Control {...field} isInvalid={!!errors.gh_link} />
              )} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Demo URL</Form.Label>
              <Controller name="demo_link" control={control} render={({ field }) => (
                <Form.Control {...field} isInvalid={!!errors.demo_link} />
              )} />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100 mt-3">
              Save Project
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default ProjectsManager;
