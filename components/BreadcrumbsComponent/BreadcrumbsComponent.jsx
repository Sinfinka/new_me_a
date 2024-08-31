import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";

const BreadcrumbsComponent = ({ paths }) => {
  const router = useRouter();

  return (
    <Breadcrumbs>
      {paths.map((path, index) =>
        index < paths.length - 1 ? (
          <Link
            key={index}
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
          <Typography key={index} color="textPrimary">
            {path.label}
          </Typography>
        )
      )}
    </Breadcrumbs>
  );
};

export default BreadcrumbsComponent;
