import React, { useState, useEffect } from "react";
import { Form, Button, Alert, Row, Col, Modal } from "react-bootstrap";
import { supabase } from "../../utils/supabase";

function AboutManager() {
  const [skills, setSkills] = useState([]);
  const [tools, setTools] = useState([]);
  const [newSkillName, setNewSkillName] = useState("");
  const [newSkillImg, setNewSkillImg] = useState("");
  const [newToolName, setNewToolName] = useState("");
  const [newToolImg, setNewToolImg] = useState("");
  const [message, setMessage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [skillSearch, setSkillSearch] = useState("");
  const [toolSearch, setToolSearch] = useState("");
  
  // Edit Modal State
  const [showEditModal, setShowEditModal] = useState(false);
  const [editType, setEditType] = useState(null); // 'skills' or 'tools'
  const [editIndex, setEditIndex] = useState(null);
  const [editName, setEditName] = useState("");
  const [editImg, setEditImg] = useState("");

  useEffect(() => {
    fetchAboutInfo();
  }, []);

  const fetchAboutInfo = async () => {
    const { data } = await supabase.from("about_info").select("*");
    if (data) {
      const skillsData = data.find((d) => d.type === "skills");
      const toolsData = data.find((d) => d.type === "tools");
      setSkills(skillsData?.items || []);
      setTools(toolsData?.items || []);
    }
  };

  const handleSaveSkills = async () => {
    const { error } = await supabase.from("about_info").upsert({ type: "skills", items: skills }, { onConflict: 'type' });
    setMessage(error ? `Skill error: ${error.message}` : "Skills saved successfully!");
    setTimeout(() => setMessage(null), 3000);
  };

  const handleSaveTools = async () => {
    const { error } = await supabase.from("about_info").upsert({ type: "tools", items: tools }, { onConflict: 'type' });
    setMessage(error ? `Tool error: ${error.message}` : "Tools saved successfully!");
    setTimeout(() => setMessage(null), 3000);
  };

  const handleFileUpload = async (event, setter) => {
    const file = event.target.files[0];
    if (!file) return;
    
    setUploading(true);
    const fileExt = file.name.split('.').pop();
    const fileName = `${Math.random()}.${fileExt}`;
    const filePath = `about/${fileName}`;

    const { error: uploadError } = await supabase.storage
      .from('portfolio-images')
      .upload(filePath, file);

    if (uploadError) {
      alert("Error uploading image: " + uploadError.message);
      setUploading(false);
      return;
    }

    const { data: { publicUrl } } = supabase.storage
      .from('portfolio-images')
      .getPublicUrl(filePath);

    setter(publicUrl);
    setUploading(false);
  };

  const addSkill = (e) => {
    e.preventDefault();
    if (newSkillName && !skills.find(s => s.name === newSkillName)) {
      setSkills([...skills, { name: newSkillName.trim(), img_url: newSkillImg.trim() }]);
      setNewSkillName("");
      setNewSkillImg("");
    }
  };

  const addTool = (e) => {
    e.preventDefault();
    if (newToolName && !tools.find(t => t.name === newToolName)) {
      setTools([...tools, { name: newToolName.trim(), img_url: newToolImg.trim() }]);
      setNewToolName("");
      setNewToolImg("");
    }
  };

  const removeSkill = (index) => {
    const freshNames = [...skills];
    freshNames.splice(index, 1);
    setSkills(freshNames);
  };

  const removeTool = (index) => {
    const freshTools = [...tools];
    freshTools.splice(index, 1);
    setTools(freshTools);
  };

  const openEditModal = (type, index) => {
    setEditType(type);
    setEditIndex(index);
    const item = type === 'skills' ? skills[index] : tools[index];
    setEditName(item.name);
    setEditImg(item.img_url || "");
    setShowEditModal(true);
  };

  const handleUpdateItem = () => {
    if (editType === 'skills') {
      const updated = [...skills];
      updated[editIndex] = { name: editName, img_url: editImg };
      setSkills(updated);
    } else {
      const updated = [...tools];
      updated[editIndex] = { name: editName, img_url: editImg };
      setTools(updated);
    }
    setShowEditModal(false);
  };

  const filteredSkills = skills.filter(s => s.name?.toLowerCase().includes(skillSearch.toLowerCase()));
  const filteredTools = tools.filter(t => t.name?.toLowerCase().includes(toolSearch.toLowerCase()));

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h4>Manage About / Skills & Tools</h4>
        <div className="d-flex gap-2">
            <Button variant="primary" onClick={handleSaveSkills}>Save All Skills</Button>
            <Button variant="info" onClick={handleSaveTools}>Save All Tools</Button>
        </div>
      </div>
      
      {message && <Alert variant="success">{message}</Alert>}

      <Row>
        <Col md={6}>
          <div className="p-4 bg-dark border border-secondary rounded shadow-sm">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h5 className="purple mb-0">Technical Skills</h5>
              <Form.Control 
                size="sm"
                type="text" 
                placeholder="Search skills..." 
                value={skillSearch}
                onChange={(e) => setSkillSearch(e.target.value)}
                style={{ width: '150px', backgroundColor: '#000', color: 'white', borderColor: '#c770f0' }}
              />
            </div>
            
            <Form onSubmit={addSkill} className="mb-4 p-3 border border-secondary rounded bg-black">
              <h6>Add New Skill</h6>
              <Form.Group className="mb-2">
                <Form.Control type="text" placeholder="Skill Name" value={newSkillName} onChange={(e) => setNewSkillName(e.target.value)} required />
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Control type="file" onChange={(e) => handleFileUpload(e, setNewSkillImg)} disabled={uploading} accept="image/*" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Or Image URL" value={newSkillImg} onChange={(e) => setNewSkillImg(e.target.value)} />
              </Form.Group>
              <Button type="submit" variant="purple-outline" className="w-100" disabled={uploading}>
                {uploading ? "Uploading..." : "Add to List"}
              </Button>
            </Form>

            <div className="skills-list" style={{maxHeight: '400px', overflowY: 'auto'}}>
              {filteredSkills.map((skill, i) => (
                <div key={i} className="d-flex align-items-center justify-content-between p-2 mb-2 bg border border-secondary rounded">
                  <div className="d-flex align-items-center">
                    <img src={skill.img_url || 'https://via.placeholder.com/30'} alt={skill.name} width="30" height="30" className="me-3 rounded" />
                    <span>{skill.name}</span>
                  </div>
                  <div>
                    <Button variant="link" size="sm" onClick={() => openEditModal('skills', i)} className="text-info me-2">Edit</Button>
                    <Button variant="link" size="sm" onClick={() => removeSkill(i)} className="text-danger">Delete</Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Col>

        <Col md={6}>
          <div className="p-4 bg-dark border border-secondary rounded shadow-sm">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h5 className="purple mb-0">Development Tools</h5>
              <Form.Control 
                size="sm"
                type="text" 
                placeholder="Search tools..." 
                value={toolSearch}
                onChange={(e) => setToolSearch(e.target.value)}
                style={{ width: '150px', backgroundColor: '#000', color: 'white', borderColor: '#c770f0' }}
              />
            </div>
            
            <Form onSubmit={addTool} className="mb-4 p-3 border border-secondary rounded bg-black">
              <h6>Add New Tool</h6>
              <Form.Group className="mb-2">
                <Form.Control type="text" placeholder="Tool Name" value={newToolName} onChange={(e) => setNewToolName(e.target.value)} required />
              </Form.Group>
              <Form.Group className="mb-2">
                <Form.Control type="file" onChange={(e) => handleFileUpload(e, setNewToolImg)} disabled={uploading} accept="image/*" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Or Image URL" value={newToolImg} onChange={(e) => setNewToolImg(e.target.value)} />
              </Form.Group>
              <Button type="submit" variant="purple-outline" className="w-100" disabled={uploading}>
                {uploading ? "Uploading..." : "Add to List"}
              </Button>
            </Form>

            <div className="tools-list" style={{maxHeight: '400px', overflowY: 'auto'}}>
              {filteredTools.map((tool, i) => (
                <div key={i} className="d-flex align-items-center justify-content-between p-2 mb-2 bg border border-secondary rounded">
                  <div className="d-flex align-items-center">
                    <img src={tool.img_url || 'https://via.placeholder.com/30'} alt={tool.name} width="30" height="30" className="me-3 rounded" />
                    <span>{tool.name}</span>
                  </div>
                  <div>
                    <Button variant="link" size="sm" onClick={() => openEditModal('tools', i)} className="text-info me-2">Edit</Button>
                    <Button variant="link" size="sm" onClick={() => removeTool(i)} className="text-danger">Delete</Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Col>
      </Row>

      {/* Edit Item Modal */}
      <Modal show={showEditModal} onHide={() => setShowEditModal(false)} centered variant="dark">
        <Modal.Header closeButton className="bg-dark text-white border-secondary">
          <Modal.Title>Edit {editType === 'skills' ? 'Skill' : 'Tool'}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="bg-dark text-white">
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" value={editName} onChange={(e) => setEditName(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Image URL / Upload New</Form.Label>
            <Form.Control type="file" onChange={(e) => handleFileUpload(e, setEditImg)} className="mb-2" />
            <Form.Control type="text" value={editImg} onChange={(e) => setEditImg(e.target.value)} placeholder="Image public URL" />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer className="bg-dark border-secondary">
          <Button variant="secondary" onClick={() => setShowEditModal(false)}>Cancel</Button>
          <Button variant="primary" onClick={handleUpdateItem}>Update Item</Button>
        </Modal.Footer>
      </Modal>

      <style>{`
        .purple { color: #c770f0; }
        .bg-black { background-color: #0c0b0b !important; }
        .btn-purple-outline { border: 1px solid #c770f0; color: #c770f0; background: transparent; }
        .btn-purple-outline:hover { background: #c770f0; color: white; }
        .modal-content { border: 1px solid #c770f0; }
      `}</style>
    </div>
  );
}

export default AboutManager;
