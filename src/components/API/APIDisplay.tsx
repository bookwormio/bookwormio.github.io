import React from "react";
import "./APIDisplay.css";

interface Route {
  description: string | null;
  endpoint: string;
  methods: string[];
  route: string;
}

interface APIResponse {
  description: string;
  routes: Route[];
}

const APIRESPONSE = `{
    "description": "Available API Routes:",
    "routes": [
      {
        "description": null,
        "endpoint": "index",
        "methods": ["GET", "HEAD", "OPTIONS"],
        "route": "/"
      },
      {
        "description": null,
        "endpoint": "routes",
        "methods": ["GET", "HEAD", "OPTIONS"],
        "route": "/routes"
      },
      {
        "description": "\\n    Endpoint to request a recommendation for user(s).\\n    The request should contain a list of 1 or more user IDs.\\n    This method calls the recommend_books function from rec_engine\\n    and returns the list of recommended volume IDs.\\n\\n    Parameters:\\n    \\n        user_ids: list of 1 or more user IDs\\n\\n    Returns:\\n    \\n        volume_ids: list of recommended volume IDs\\n    ",
        "endpoint": "recommendation",
        "methods": ["OPTIONS", "POST"],
        "route": "/recommendation"
      },
      {
        "description": "\\n    Endpoint to get similar books based on a given book ID.\\n    Request should be a dictionary with keys 'book_id' and 'count'.\\n    If count is not specified it will default to 10.\\n\\n    Parameters:\\n    \\n        book_id: ID of the book to find similar books for\\n        count: (optional) number of similar books to return, defaults to 10\\n\\n    Returns:\\n    \\n        volume_ids: list of similar book volume IDs\\n    ",
        "endpoint": "similar_books",
        "methods": ["OPTIONS", "POST"],
        "route": "/similar"
      },
      {
        "description": "\\n    Test validation endpoint.\\n    ",
        "endpoint": "ping",
        "methods": ["GET", "HEAD", "OPTIONS"],
        "route": "/ping"
      }
    ]
  }`;

const APIDisplay = () => {
  const data: APIResponse = JSON.parse(APIRESPONSE);

  const formatDescription = (description: string | null) => {
    if (!description) return null;

    const sections = description.split(/Parameters:|Returns:/g);
    return {
      description: sections[0].trim(),
      parameters: sections[1]?.trim() || null,
      returns: sections[2]?.trim() || null,
    };
  };

  return (
    <div className="api-docs">
      <div className="api-header">
        <h1>BookWorm API Documentation</h1>
        <p className="base-url">Base URL: api.bookwormio.com</p>
      </div>

      {data.routes.map((route) => {
        const formattedDesc = route.description
          ? formatDescription(route.description)
          : null;

        return (
          <div key={route.route} className="endpoint-card">
            <div className="endpoint-header">
              <div className="endpoint-title">
                <h2>{route.endpoint}</h2>
                <span className="endpoint-route">{route.route}</span>
              </div>
              <div className="method-tags">
                {route.methods.map((method) => (
                  <span
                    key={method}
                    className={`method ${method.toLowerCase()}`}
                  >
                    {method}
                  </span>
                ))}
              </div>
            </div>
            <div className="endpoint-content">
              {formattedDesc && (
                <>
                  {formattedDesc.description && (
                    <p>{formattedDesc.description}</p>
                  )}

                  {formattedDesc.parameters && (
                    <div className="params-section">
                      <h3>Parameters</h3>
                      <div className="params-box">
                        {formattedDesc.parameters
                          .split("\n")
                          .map((param, index) => {
                            const trimmed = param.trim();
                            if (!trimmed) return null;
                            const [key, ...rest] = trimmed.split(":");
                            return (
                              <p key={index}>
                                {key && <code>{key.trim()}</code>}
                                {rest.length > 0 &&
                                  `: ${rest.join(":").trim()}`}
                              </p>
                            );
                          })}
                      </div>
                    </div>
                  )}

                  {formattedDesc.returns && (
                    <div className="params-section">
                      <h3>Returns</h3>
                      <div className="params-box">
                        {formattedDesc.returns
                          .split("\n")
                          .map((returnVal, index) => {
                            const trimmed = returnVal.trim();
                            if (!trimmed) return null;
                            const [key, ...rest] = trimmed.split(":");
                            return (
                              <p key={index}>
                                {key && <code>{key.trim()}</code>}
                                {rest.length > 0 &&
                                  `: ${rest.join(":").trim()}`}
                              </p>
                            );
                          })}
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default APIDisplay;
