import React, { useState, useEffect } from "react";
import { Container, Row, Col, Nav, Button } from "react-bootstrap";
import { supabase } from "../../utils/supabase";
import AdminLogin from "./AdminLogin";
import ProjectsManager from "./ProjectsManager";
import AboutManager from "./AboutManager";
import CertificatesManager from "./CertificatesManager";
import WorkExperienceManager from "./WorkExperienceManager";
import ResumeManager from "./ResumeManager";

function AdminDashboard() {
  const [session, setSession] = useState(null);
  const [activeTab, setActiveTab] = useState("projects");

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  if (!session) {
    return <AdminLogin onLogin={() => {}} />;
  }

  // Double check email logic just in case
  if (session.user.email !== "fastfady2019@gmail.com") {
    return (
      <Container className="text-center mt-5 text-white">
        <h2>Access Denied</h2>
        <p>Your email is not authorized to access this dashboard.</p>
        <Button onClick={handleLogout}>Log Out</Button>
      </Container>
    );
  }

  return (
    <Container fluid style={{ backgroundColor: "#0d1117", minHeight: "100vh", color: "white", padding: "20px" }}>
      <Row>
        <Col md={3} className="pt-4">
          <h3>Admin Panel</h3>
          <Nav className="flex-column mt-4 pe-3" variant="pills">
            <Nav.Link 
              className="mb-2 text-white" 
              active={activeTab === "about"} 
              onClick={() => setActiveTab("about")}
              style={{ backgroundColor: activeTab === "about" ? "#c770f0" : "transparent" }}
            >
              About / Skills
            </Nav.Link>
            <Nav.Link 
              className="mb-2 text-white" 
              active={activeTab === "projects"} 
              onClick={() => setActiveTab("projects")}
              style={{ backgroundColor: activeTab === "projects" ? "#c770f0" : "transparent" }}
            >
              Projects
            </Nav.Link>
            <Nav.Link 
              className="mb-2 text-white" 
              active={activeTab === "certificates"} 
              onClick={() => setActiveTab("certificates")}
              style={{ backgroundColor: activeTab === "certificates" ? "#c770f0" : "transparent" }}
            >
              Certificates
            </Nav.Link>
            <Nav.Link 
              className="mb-2 text-white" 
              active={activeTab === "experience"} 
              onClick={() => setActiveTab("experience")}
              style={{ backgroundColor: activeTab === "experience" ? "#c770f0" : "transparent" }}
            >
              Work Experience
            </Nav.Link>
            <Nav.Link 
              className="mb-4 text-white" 
              active={activeTab === "resume"} 
              onClick={() => setActiveTab("resume")}
              style={{ backgroundColor: activeTab === "resume" ? "#c770f0" : "transparent" }}
            >
              Resume PDF
            </Nav.Link>
            <Button variant="outline-danger" onClick={handleLogout}>Logout</Button>
          </Nav>
        </Col>
        <Col md={9} className="pt-4">
          {/* Main Content Area */}
          <div className="p-4" style={{ backgroundColor: "#1e1e1e", borderRadius: "10px", minHeight: "80vh" }}>
            {activeTab === "projects" && <ProjectsManager />}
            {activeTab === "about" && <AboutManager />}
            {activeTab === "certificates" && <CertificatesManager />}
            {activeTab === "experience" && <WorkExperienceManager />}
            {activeTab === "resume" && <ResumeManager />}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default AdminDashboard;
