import React from "react";
import "./styles/ContactPage.css";
import { useForm, ValidationError } from '@formspree/react';
import BackgroundAnimation from './BackgroundAnimation';

const ContactPage = () => {
  const [state, handleSubmit] = useForm("xdkelwaa");

  return (
    <div style={{
      width: "100%",
      minHeight: "100vh",
      backgroundColor: "white",
      padding: "20px",
      position: "relative",
      zIndex: 100
    }}>
      <BackgroundAnimation />
      <div style={{
        textAlign: "center",
        marginTop: "60px",
        marginBottom: "40px"
      }}>
        <h1 style={{
          fontSize: "2.5rem",
          fontWeight: "bold",
          marginBottom: "10px"
        }}>GET IN TOUCH</h1>
        <div style={{
          width: "100px",
          height: "4px",
          backgroundColor: "#333",
          margin: "0 auto"
        }}></div>
      </div>
      
      <div style={{
        maxWidth: "1000px",
        margin: "0 auto",
        backgroundColor: "white",
        padding: "30px",
        borderRadius: "8px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
      }}>
        {state.succeeded ? (
          <div style={{
            textAlign: "center",
            padding: "30px 0"
          }}>
            <h2 style={{
              color: "#27ae60",
              marginBottom: "15px"
            }}>Thank You!</h2>
            <p>Your message has been sent successfully. I'll get back to you soon!</p>
          </div>
        ) : (
          <>
            <h2 style={{
              textAlign: "center",
              marginBottom: "30px"
            }}>Send Me a Message</h2>
            
            <form onSubmit={handleSubmit}>
              <div style={{marginBottom: "20px"}}>
                <label 
                  style={{
                    display: "block", 
                    marginBottom: "8px", 
                    fontWeight: "500"
                  }}
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  style={{
                    width: "100%",
                    padding: "10px",
                    border: "1px solid #ddd",
                    borderRadius: "4px",
                    fontSize: "16px"
                  }}
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Your name"
                />
              </div>
              
              <div style={{marginBottom: "20px"}}>
                <label 
                  style={{
                    display: "block", 
                    marginBottom: "8px", 
                    fontWeight: "500"
                  }}
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  style={{
                    width: "100%",
                    padding: "10px",
                    border: "1px solid #ddd",
                    borderRadius: "4px",
                    fontSize: "16px"
                  }}
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="Your email address"
                />
                <ValidationError 
                  prefix="Email" 
                  field="email"
                  errors={state.errors}
                  style={{
                    color: "#e74c3c",
                    fontSize: "14px",
                    marginTop: "5px"
                  }}
                />
              </div>
              
              <div style={{marginBottom: "20px"}}>
                <label 
                  style={{
                    display: "block", 
                    marginBottom: "8px", 
                    fontWeight: "500"
                  }}
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  style={{
                    width: "100%",
                    padding: "10px",
                    border: "1px solid #ddd",
                    borderRadius: "4px",
                    fontSize: "16px",
                    minHeight: "120px"
                  }}
                  id="message"
                  name="message"
                  required
                  placeholder="Your message"
                ></textarea>
                <ValidationError 
                  prefix="Message" 
                  field="message"
                  errors={state.errors}
                  style={{
                    color: "#e74c3c",
                    fontSize: "14px",
                    marginTop: "5px"
                  }}
                />
              </div>
              
              <button 
                style={{
                  backgroundColor: "#333",
                  color: "white",
                  border: "none",
                  padding: "12px 24px",
                  fontSize: "16px",
                  borderRadius: "4px",
                  cursor: state.submitting ? "default" : "pointer",
                  opacity: state.submitting ? 0.7 : 1
                }}
                type="submit"
                disabled={state.submitting}
              >
                {state.submitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </>
        )}
        
        <div style={{
          marginTop: "30px", 
          textAlign: "center",
          paddingTop: "20px",
          borderTop: "1px solid #eee"
        }}>
          <p>Or reach me directly at: <strong>harsh@jindalmarketing.com</strong></p>
          <div style={{marginTop: "15px"}}>
            <a 
              href="https://github.com/harshjindall" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{
                marginRight: "15px",
                color: "#333",
                textDecoration: "none",
                fontWeight: "500"
              }}
            >
              GitHub
            </a>
            <a 
              href="https://www.linkedin.com/in/harshjindal/" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                color: "#0077b5",
                textDecoration: "none",
                fontWeight: "500"
              }}
            >
              LinkedIn
            </a>
          </div>
        </div>
        
        {/* Book my Time section */}
        <div style={{
          marginTop: "40px",
          textAlign: "center",
          paddingTop: "30px",
          borderTop: "1px solid #eee"
        }}>
          <h2 style={{
            fontSize: "1.75rem",
            marginBottom: "20px"
          }}>Or Book My Time</h2>
          <p style={{
            marginBottom: "20px",
            color: "#555"
          }}>
            Schedule a meeting directly on my calendar:
          </p>
          <div style={{
            width: "100%",
            height: "580px",
            overflow: "hidden",
            borderRadius: "8px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
          }}>
            <iframe
              src="https://meetings-na2.hubspot.com/harsh-jindal"
              frameBorder="0"
              style={{
                width: "100%",
                height: "100%",
                border: "none"
              }}
              title="Book a meeting"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage; 