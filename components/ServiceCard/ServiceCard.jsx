import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Modal,
  Box,
  IconButton,
} from "@mui/material";
import { AiOutlineClose } from "react-icons/ai";
import css from "./ServiceCard.module.css";
import Link from "next/link";
import Image from "next/image";

const ServiceCard = ({
  title,
  description,
  image,
  details,
  links,
  afterWords,
}) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Card className={css.card}>
        <CardMedia component="img" height="140" image={image} alt={title} />
        <CardContent>
          <Typography variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
          <Button onClick={handleOpen}>Больше</Button>
        </CardContent>
      </Card>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="service-modal-title"
        aria-describedby="service-modal-description"
      >
        <Box className={css.modal}>
          <IconButton
            aria-label="close"
            onClick={handleClose}
            className={css.closeButton}
          >
            <AiOutlineClose />
          </IconButton>
          <Typography id="service-modal-title" variant="h6" component="h2">
            {title}
          </Typography>
          <Typography id="service-modal-description" sx={{ mt: 2 }}>
            {details}
            {links.map((link, index) => (
              <div key={index}>
                <Link href={link.href}>
                  {" "}
                  <Image
                    src={link.src}
                    alt={link.alt}
                    className={css.image}
                    layout="responsive"
                    width={260}
                    height={170}
                  />{" "}
                  {link.title}{" "}
                </Link>{" "}
                {link.description}
              </div>
            ))}
            {afterWords}
            {/* Добавить тут Заказать звонок */}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default ServiceCard;
