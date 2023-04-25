import { Navbar,Header,Footer } from '@/components';
import React from 'react'

type Props = {
    children: any;
}

const Layout = ({children}: Props) => {
  return (
    <React.Fragment>
      <div className="column bg-slate-900 justify-center items-center">
        <Header />
        <Navbar />
      </div>
      <div>{children}</div>
      <div className="flex w-full items-center justify-center p-6 bg-gray-50 divide-y divide-dashed">
        <img src="/card.svg" className="hidden md:flex w-full h-full" />
        <img src="/cardMobile.svg" className="md:hidden w-full h-full" />
      </div>
      <div className="flex justify-center items-center w-full bg-slate-900">
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default Layout