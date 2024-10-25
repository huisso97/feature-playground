import ListCard from '@/components/common/list-card';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <div className='list-container'>{children}</div>;
};

export default Layout;
