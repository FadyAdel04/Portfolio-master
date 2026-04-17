import React, { useState } from "react";
import { Container, Form, Button, Alert } from "react-bootstrap";
import { supabase } from "../../utils/supabase";

function AdminLogin({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    // As requested: ONLY ONE ADMIN
    if (email !== "fastfady2019@gmail.com") {
      setError("Unauthorized email address. Access denied.");
      setLoading(false);
      return;
    }

    let { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    // If invalid credentials, it might be because the account isn't created yet.
    // Specially handle the first time admin account creation!
    if (error && error.message.includes("Invalid login credentials")) {
      const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
        email,
        password,
      });
      
      if (signUpError) {
        setError(signUpError.message);
      } else if (signUpData?.user) {
        // Success! We just created the admin account.
        setError("Admin account created successfully! Please check your email for a confirmation link if required by Supabase, or simply click Login again if auto-confirm is enabled.");
        // If email confirmation is off, they might actually be logged in
        if (signUpData.session) {
          onLogin(signUpData.user);
        }
      } else {
        setError(error.message);
      }
    } else if (error) {
      setError(error.message);
    } else {
      onLogin(data.user);
    }
    setLoading(false);
  };

  return (
    <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
      <div className="p-4" style={{ backgroundColor: "#1e1e1e", borderRadius: "10px", width: "100%", maxWidth: "400px" }}>
        <h2 className="text-center text-white mb-4">Admin Login</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleLogin}>
          <Form.Group className="mb-3">
            <Form.Label className="text-white">Email address</Form.Label>
            <Form.Control 
              type="email" 
              placeholder="Enter admin email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label className="text-white">Password</Form.Label>
            <Form.Control 
              type="password" 
              placeholder="Password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="w-100" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </Button>
        </Form>
      </div>
    </Container>
  );
}

export default AdminLogin;
