import ListCard from '@/components/common/list-card';

const Home = () => {
  return (
    <div className='list-container'>
      <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
        <ListCard
          href='/observer'
          title='Observer'
          description='Observer 패턴 구현'
        />
        <ListCard
          href='/react-feature'
          title='React Feature'
          description='React Feature 구현'
        />
        <ListCard
          href='/type-exercise'
          title='Type Exercise'
          description='Type Exercise 문제 풀이'
        />
        <ListCard
          href='/headless-ui'
          title='Headless UI'
          description='Headless UI 구현'
        />
      </div>
    </div>
  );
};

export default Home;
