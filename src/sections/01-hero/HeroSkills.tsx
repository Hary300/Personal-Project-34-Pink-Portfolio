import { heroData } from '@/data/heroData';

const HeroSkills = () => {
  const skills = heroData.skills;
  return (
    <div className='absolute rounded-full hidden lg:flex flex-col gap-[21.78px] py-[32.67px] px-[21.78px] border border-primary-300 left-2 top-[107.57px] xl:left-[clamp(20px,calc(62.5vw-780px),120px)]'>
      {skills.map((skill) => {
        return (
          <div
            key={skill.name}
            className='rounded-full size-[69.43px] flex justify-center items-center aspect-square shrink-0 border border-primary-300 p-1'
          >
            <img
              src={skill.icon}
              alt={`${skill.name} image`}
              className='size-10'
            />
          </div>
        );
      })}
    </div>
  );
};

export default HeroSkills;
