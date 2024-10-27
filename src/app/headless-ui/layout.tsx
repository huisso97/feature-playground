import { BreadcrumbResponsive } from "@/components/common/breadcrumb";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return( <div className='list-container'>
      
      {children}
    </div>
  );
};

export default Layout;
