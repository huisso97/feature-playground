import ListCard from '@/components/common/list-card';

const TypeExercise = () => {
  return (
    <div className='flex flex-col gap-4'>
      <ListCard
        href='/type-exercise/11'
        title='Type Exercise 11'
        description={<>Type Exercise 11</>}
      />
      <ListCard
        href='/type-exercise/12'
        title='Type Exercise 12'
        description={<>Type Exercise 12</>}
      />
    </div>
  );
};

export default TypeExercise;
