import ListCard from "@/components/common/list-card";

const HeadlessUI = () => {
  return    <div className='list-container'>
      <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
        <ListCard
          href='/headless-ui/dropdown'
          title='Dropdown'
          description='Dropdown 구현'
        />
        <ListCard
          href='/headless-ui/accordion'
          title='Accordion'
          description='Accordion 구현'
        />
      </div>
    </div>;
};

export default HeadlessUI;
