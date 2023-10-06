'use client';

import Container from '../shared/Container';
import Logo from './Logo';
import Search from './Search';
import UserMenu from './UserMenu';

const Navbar = () => {
  return (
    <div className="fixed z-10 w-full bg-white shadow-sm">
      <div className="border-b-[1px] py-4">
        <Container>
          <div
            className="
              flex
              items-center
              justify-between
              gap-3
              md:gap-2
            "
          >
            <Logo />
            <Search />
            <UserMenu />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
