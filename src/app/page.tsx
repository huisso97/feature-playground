import ListCard from '@/components/common/list-card';

const Home = () => {
  return (
    <div className='list-container'>
      <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
        <ListCard
          href='/observer'
          title='Observer'
          description='Observer로 동적 애니메이션 기능을 볼 수 있습니다.'
        />
        <ListCard
          href='/react-feature'
          title='React Feature'
          description='React Feature들을 볼 수 있습니다.'
        />
      </div>
    </div>
  );
};

export default Home;
