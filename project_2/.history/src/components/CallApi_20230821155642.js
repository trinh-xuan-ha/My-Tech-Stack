import React, { useState } from "react";

export default function CallApi({
  apiEndpoint,
  requestData,
  onSuccess,
  onError,
}) {
  const [loading, setLoading] = useState(false);

  const handleAddRow = async () => {
    try {
      setLoading(true);
      const response = await fetch(apiEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });

      const data = await response.json();
      setLoading(false);

      if (response.ok) {
        onSuccess(data); // Trigger any necessary update after success
      } else {
        onError("Error adding row"); // Handle error case
      }
    } catch (error) {
      setLoading(false);
      onError("Error adding row"); // Handle error case
    }
  };
}
