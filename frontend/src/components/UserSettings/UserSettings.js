import React from "react"
import TextField from "../TextField"
import Button from "../Button"

function UserSettings({
  currentPassword,
  newPassword,
  confirmPassword,
  loading,
  success,
  error,
  onUpdate,
  onSubmit,
}) {
  function updateText(field_name) {
    return (e, newValue) => {
      onUpdate(field_name, newValue)
    }
  }
  return (
    <div className="user-settings">
      <h1 className="title">User Settings</h1>
      <h3 className="password-title">Change Your Password</h3>
      <div>
        <TextField
          label="Current Password"
          value={currentPassword}
          placeholder={"Enter Your Current Password"}
          onChange={updateText("currentPassword")}
          type="password"
        />
      </div>
      <div>
        <TextField
          label="New Password"
          value={newPassword}
          placeholder={"Enter Your New Password"}
          onChange={updateText("newPassword")}
          type="password"
        />
      </div>
      <div>
        <TextField
          label="Confirm Password"
          value={confirmPassword}
          placeholder={"Confirm Your New Password"}
          onChange={updateText("confirmPassword")}
          type="password"
        />
      </div>
      <div>
        <Button onClick={onSubmit} disabled={loading}>
          <div className="submit-content">
            {loading ? "SUBMITING..." : "SUBMIT"}
          </div>
        </Button>
      </div>
      {error && <div className="error">{error}</div>}
    </div>
  )
}

export default UserSettings
