import React from "react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function PIButton({
  children,
  action,
  variant,
  size,
  loading,
  disabled,
  className,
  icon,
}) {
  return (
    <Button
      className={className}
      onClick={action}
      variant={variant}
      disabled={disabled}
      size={size}
    >
      {icon && <FontAwesomeIcon icon={icon} className="me-2" />}
      {/* Berfungsi untuk disabled button saat user submit agar tidak terjadi multiple request */}
      {loading ? "Loading..." : children}
    </Button>
  );
}

export default PIButton;
