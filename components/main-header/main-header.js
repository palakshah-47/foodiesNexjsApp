import logoImg from '@/assets/logo.png';
import Link from 'next/link';
import classes from './main-header.module.css';
import Image from 'next/image';
import MainHeaderBackGround from './main-header-background';
import NavLink from './nav-link';
export default function MainHeader() {
  return (
    <>
      <MainHeaderBackGround />
      <header className={classes.header}>
        <Link href="/" className={classes.logo}>
          <Image src={logoImg} alt="A plate with food on it" priority />
          NextLevel Food
        </Link>
        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Foodies community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
