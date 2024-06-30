import { FaInfinity } from 'react-icons/fa';
import css from './Footer.module.css';
import Link from 'next/link';

function Footer() {
  return (
    <footer className={css.footer}>
      <p>footer</p>
      <p className={css.text}>
        2024 Developed by <FaInfinity className={css.rotatingIcon} />{' '}
        <Link href="https://github.com/Sinfinka" className={css.linkToGit}>
          Sinfinka
        </Link>
      </p>
    </footer>
  );
}

export default Footer;
