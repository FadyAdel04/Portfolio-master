import React, { useState, useEffect } from "react";
import { Table, Button, Form, Modal, Badge } from "react-bootstrap";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { supabase } from "../../utils/supabase";

const certSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  category: z.string().min(1, "Category is required"),
  live_link: z.string().url("Must be a valid URL").optional().or(z.literal("")),
  img_url: z.string().url("Must be a valid URL").optional().or(z.literal("")),
  org_logos: z.string().optional() // We'll parse this comma-separated string into an array before saving
});

function CertificatesManager() {
  const [certificates, setCertificates] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const [uploading, setUploading] = useState(false);
  const [uploadStatus, setUploadStatus] = useState("");

  const { control, handleSubmit, reset, setValue, getValues, formState: { errors } } = useForm({
    resolver: zodResolver(certSchema),
    defaultValues: { title: "", description: "", category: "", live_link: "", img_url: "", org_logos: "" }
  });

  useEffect(() => {
    fetchCertificates();
  }, []);

  const fetchCertificates = async () => {
    const { data } = await supabase.from("certificates").select("*").order("created_at", { ascending: false });
    if (data) setCertificates(data);
  };

  const handleFileUpload = async (event, fieldName) => {
    const files = event.target.files;
    if (!files || files.length === 0) return;
    
    setUploading(true);
    const urls = [];
    const total = files.length;

    for (let i = 0; i < total; i++) {
        const file = files[i];
        setUploadStatus(`Uploading ${i+1}/${total}`);

        const fileExt = file.name.split('.').pop();
        const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;
        const filePath = `certificates/${fileName}`;

        const { error: uploadError } = await supabase.storage
        .from('portfolio-images')
        .upload(filePath, file);

        if (uploadError) {
            alert("Error uploading image: " + uploadError.message);
            continue;
        }

        const { data: { publicUrl } } = supabase.storage
        .from('portfolio-images')
        .getPublicUrl(filePath);
        
        urls.push(publicUrl);
    }

    if (fieldName === 'org_logos') {
      const currentVal = getValues("org_logos") || "";
      const newUrls = urls.join(", ");
      setValue("org_logos", currentVal ? `${currentVal}, ${newUrls}` : newUrls);
    } else {
      setValue(fieldName, urls[0]);
    }
    setUploading(false);
    setUploadStatus("");
  };

  const handleShow = (cert = null) => {
    if (cert) {
      setEditingId(cert.id);
      setValue("title", cert.title);
      setValue("description", cert.description);
      setValue("category", cert.category || "");
      setValue("live_link", cert.live_link || "");
      setValue("img_url", cert.img_url || "");
      setValue("org_logos", cert.org_logos ? cert.org_logos.join(", ") : "");
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
    const org_logos_array = formData.org_logos ? formData.org_logos.split(",").map(s => s.trim()).filter(Boolean) : [];
    
    const dbData = {
      title: formData.title,
      description: formData.description,
      category: formData.category,
      live_link: formData.live_link,
      img_url: formData.img_url,
      org_logos: org_logos_array
    };

    if (editingId) {
      const { error } = await supabase.from("certificates").update(dbData).match({ id: editingId });
      if (error) alert("Error updating: " + error.message);
    } else {
      const { error } = await supabase.from("certificates").insert([dbData]);
      if (error) alert("Error inserting: " + error.message);
    }
    fetchCertificates();
    handleClose();
  };

  const handleDelete = async (id) => {
    if (window.confirm("Delete this certificate?")) {
      await supabase.from("certificates").delete().match({ id });
      fetchCertificates();
    }
  };

  const filteredCerts = certificates.filter(c => 
    c.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.category?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h4>Manage Certificates</h4>
        <div className="d-flex gap-3">
          <Form.Control 
            type="text" 
            placeholder="Search certificates..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ width: '300px', backgroundColor: '#1a1a1a', color: 'white', borderColor: '#c770f0' }}
          />
          <Button variant="success" onClick={() => handleShow()}>Add New Certificate</Button>
        </div>
      </div>

      <Table striped bordered hover variant="dark" responsive>
        <thead>
          <tr>
            <th>Title</th>
            <th>Category</th>
            <th>Link</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredCerts.map((c) => (
            <tr key={c.id}>
              <td>{c.title}</td>
              <td>{c.category}</td>
              <td>{c.live_link && <a href={c.live_link} target="_blank" rel="noreferrer">View</a>}</td>
              <td>
                <Button variant="info" size="sm" className="me-2" onClick={() => handleShow(c)}>Edit</Button>
                <Button variant="danger" size="sm" onClick={() => handleDelete(c.id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={showModal} onHide={handleClose} variant="dark">
        <Modal.Header closeButton className="bg-dark text-white text-dark-close">
          <Modal.Title>{editingId ? "Edit Certificate" : "Add Certificate"}</Modal.Title>
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
              <Form.Control.Feedback type="invalid">{errors.description?.message}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Category (e.g. Web Development)</Form.Label>
              <Controller name="category" control={control} render={({ field }) => (
                <Form.Control {...field} isInvalid={!!errors.category} />
              )} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Certificate Image</Form.Label>
              <div className="d-flex mb-2 align-items-center">
                <Form.Control type="file" onChange={(e) => handleFileUpload(e, "img_url")} disabled={uploading} accept="image/*" />
                {uploading && <Badge bg="info" className="ms-2">{uploadStatus}</Badge>}
              </div>
              <Controller name="img_url" control={control} render={({ field }) => (
                <Form.Control {...field} isInvalid={!!errors.img_url} placeholder="Or paste link here" />
              )} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Organization Logos (Multiple select)</Form.Label>
              <div className="d-flex mb-2 align-items-center">
                <Form.Control type="file" onChange={(e) => handleFileUpload(e, "org_logos")} disabled={uploading} accept="image/*" multiple />
                {uploading && <Badge bg="info" className="ms-2">{uploadStatus}</Badge>}
              </div>
              <Controller name="org_logos" control={control} render={({ field }) => (
                <Form.Control {...field} isInvalid={!!errors.org_logos} placeholder="URLs separated by comma" />
              )} />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Live Verification Link (Optional)</Form.Label>
              <Controller name="live_link" control={control} render={({ field }) => (
                <Form.Control {...field} isInvalid={!!errors.live_link} />
              )} />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100 mt-3">Save Certificate</Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default CertificatesManager;
