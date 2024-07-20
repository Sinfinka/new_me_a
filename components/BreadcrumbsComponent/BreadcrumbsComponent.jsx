import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";

const BreadcrumbsComponent = ({ paths }) => {
  const router = useRouter();

  return (
    <Breadcrumbs aria-label="breadcrumb">
      {paths.map((path, index) => (
        <React.Fragment key={index}>
          {index < paths.length - 1 ? (
            <Link
              color="inherit"
              href={path.href}
              onClick={(e) => {
                e.preventDefault();
                router.push(path.href);
              }}
            >
              {path.label}
            </Link>
          ) : (
            <Typography color="text.primary">{path.label}</Typography>
          )}
        </React.Fragment>
      ))}
    </Breadcrumbs>
  );
};

export default BreadcrumbsComponent;
