import React, { useState, useEffect } from "react";
import { Container, Row, Button, Form, Alert, Badge } from "react-bootstrap";
import { supabase } from "../../utils/supabase";
import { AiOutlineUpload, AiOutlineCloudUpload } from "react-icons/ai";

function ResumeManager() {
  const [resumeUrl, setResumeUrl] = useState("");
  const [uploading, setUploading] = useState(false);
  const [uploadStatus, setUploadStatus] = useState("");
  const [message, setMessage] = useState(null);

  useEffect(() => {
    fetchResumeUrl();
  }, []);

  const fetchResumeUrl = async () => {
    const { data } = await supabase
      .from("about_info")
      .select("items")
      .eq("type", "resume")
      .single();
    
    if (data?.items?.url) {
      setResumeUrl(data.items.url);
    }
  };

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    if (file.type !== "application/pdf") {
      alert("Please upload a PDF file.");
      return;
    }

    setUploading(true);
    setUploadStatus("Uploading PDF...");

    const fileName = `resumes/resume-${Date.now()}.pdf`;
    const { error: uploadError } = await supabase.storage
      .from("portfolio-images")
      .upload(fileName, file);

    if (uploadError) {
      alert("Upload failed: " + uploadError.message);
      setUploading(false);
      return;
    }

    const { data: { publicUrl } } = supabase.storage
      .from("portfolio-images")
      .getPublicUrl(fileName);

    const { error: updateError } = await supabase
      .from("about_info")
      .upsert({ type: "resume", items: { url: publicUrl } }, { onConflict: 'type' });

    if (updateError) {
      setMessage({ type: "danger", text: "Resume uploaded but failed to update database: " + updateError.message });
    } else {
      setResumeUrl(publicUrl);
      setMessage({ type: "success", text: "Resume updated successfully!" });
    }

    setUploading(false);
    setUploadStatus("");
  };

  return (
    <div className="p-4 bg-dark border border-secondary rounded shadow-sm">
      <h4 className="purple mb-4">Resume Management</h4>
      {message && <Alert variant={message.type}>{message.text}</Alert>}

      <div className="mb-4 p-3 border border-secondary rounded bg-black">
        <h6>Current Resume</h6>
        {resumeUrl ? (
          <div className="mb-3">
            <Badge bg="success" className="p-2 mb-2">Active CV Hosted on Supabase</Badge>
            <br />
            <a href={resumeUrl} target="_blank" rel="noreferrer" className="text-info">
              View Current PDF
            </a>
          </div>
        ) : (
          <p className="text-muted italic">No custom resume uploaded yet. Using default asset.</p>
        )}

        <hr className="border-secondary" />

        <Form.Group className="mb-3">
          <Form.Label>Upload New CV (PDF only)</Form.Label>
          <div className="d-flex align-items-center">
            <Form.Control 
              type="file" 
              accept=".pdf"
              onChange={handleFileUpload}
              disabled={uploading}
              style={{ backgroundColor: '#000', color: 'white', borderColor: '#c770f0' }}
            />
          </div>
          {uploading && (
            <div className="mt-2">
              <Badge bg="info">{uploadStatus}</Badge>
            </div>
          )}
        </Form.Group>

        <p className="small text-muted">
          Note: This will update the "Download CV" button and the resume preview across the entire site.
        </p>
      </div>
    </div>
  );
}

export default ResumeManager;
