import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  // Button,
  Modal,
  Box,
  IconButton,
} from "@mui/material";
import { AiOutlineClose } from "react-icons/ai";
import css from "./ServiceCard.module.css";
import Link from "next/link";
import Image from "next/image";
import Button from "../Button/Button";

const ServiceCard = ({
  title,
  description,
  image,
  details,
  links,
  afterWords,
  link,
}) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleClick = (url) => {
    window.location.href = url;
  };

  return (
    <div className={css.card}>
      <Card>
        <CardMedia component="img" height="140" image={image} alt={title} />
        <CardContent className={css.cardContent}>
          <Typography className={css.modalTitle} variant="h5" component="div">
            <Link className={css.modalTitle} href={link}>
              {title}
            </Link>
          </Typography>
          <Typography
            className={css.modalDesc}
            variant="body2"
            color="text.secondary"
          >
            {description}
          </Typography>
          <Button className={css.btn} onClick={handleOpen} text={"Больше"} />
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
          <Typography
            className={css.modalTitle}
            id="service-modal-title"
            variant="h6"
            component="h2"
          >
            {title}
          </Typography>
          <Typography
            className={css.modalDescAll}
            id="service-modal-description"
            sx={{ mt: 2 }}
          >
            {details}
            <div className={css.cardWrapperAll}>
              {links.map((serviceLink, index) => (
                <div className={css.cardWrapper} key={index}>
                  <Link className={css.modalLink} href={serviceLink.href}>
                    <Image
                      src={serviceLink.src}
                      alt={serviceLink.alt}
                      className={css.image}
                      layout="responsive"
                      width={260}
                      height={170}
                    />
                    {serviceLink.title}
                  </Link>
                  {serviceLink.description}
                  <Button
                    className={css.modalBtn}
                    onClick={() => handleClick(serviceLink.href)}
                    text={"Больше..."}
                  />
                </div>
              ))}
            </div>
            {afterWords}
            {/* Добавить тут Заказать звонок */}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default ServiceCard;
