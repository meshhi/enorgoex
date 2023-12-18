import s from './TypesOfJob.module.scss';
import CustomTitle from '../UIELements/CustomTitle/CustomTitle';
import { useState } from 'react';

interface IJob {
  title: string;
  url: string;
}

const TypesOfJob = () => {
  const [jobs, setJobs] = useState<IJob[]>([{
    title: "Прокладка кабельных линий",
    url: "job_grid/1.png"
  }, {
    title: "Воздушные линии",
    url: "job_grid/2.png"
  }, {
    title: "Установка опор",
    url: "job_grid/3.png"
  }, {
    title: "ТП",
    url: "job_grid/4.png"
  }, {
    title: "Монтаж муфт",
    url: "job_grid/5.png"
  }, {
    title: "Другое",
    url: "job_grid/6.png"
  }]);

  return (
      <section className={s.types_of_job_container}>
        <CustomTitle title="Виды работ" position="right" color="white"></CustomTitle>
        <div className={s.types_of_job_grid}>
          {jobs?.map(job => {
            return(
              <div 
              key={job.title}
              className={s.grid_item}>
                <img className={s.grid_item_img} src={job.url}></img>
                <h3 className={s.grid_item_title}>{job.title}</h3>
              </div>
            )
          })}
        </div>
      </section>
  )
}

export default TypesOfJob