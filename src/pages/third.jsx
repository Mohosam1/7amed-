import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import styles from './thirdLayout.module.css';

const schema = z.object({
  name: z.string({
    required_error: 'First name is required',
  }).min(3).max(50).nonempty(),
  dob: z.string(),
  email: z.string().email(),
  gender: z.enum(['male', 'female', 'other']),
  grade: z.string().min(1).max(12),
  number: z.string(),
  comment: z.string().optional(),
});

const Third = () => {

  const { register, handleSubmit, formState: { errors } , reset } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    reset()
  };

  return (
    
    <div>
      <h1 className={styles.title}>Register for admission</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className={styles.label}>
          <p>Name:</p>
          <input {...register('name')} className={styles.input} placeholder='Name' />
        </label>
          {errors.name && <span className={styles.span}>{errors.name.message}</span>}
        <label className={styles.label}>
          <p>Date of Birth:</p>
          <input type="date" {...register('dob')} className={styles.input} />
        </label>
          {errors.dob && <span className={styles.span}>{errors.dob.message}</span>}
        <label className={styles.label}>
          <p>Email:</p>
          <input type="email" {...register('email')} className={styles.input} placeholder='e-mail' />
        </label>
          {errors.email && <span className={styles.span}>{errors.email.message}</span>}
        <label className={styles.label}>
          <p>Grade:</p>
          <input type="number" {...register('grade')} className={styles.input} placeholder='Phone number' />
        </label>
          {errors.grade && <span className={styles.span}>{errors.grade.message}</span>}
        <label className={styles.label}>
          <p>Phone Number:</p>
          <input type="number" {...register('number')} className={styles.input} placeholder='Grade' />
        </label>
          {errors.number && <span className={styles.span}>{errors.number.message}</span>}
        <label className={styles.label}>
          <p>Gender:</p>
          <select {...register('gender')} className={styles.select} placeholder='Gender'>
            <option value="male" className={styles.option}>Male</option>
            <option value="female" className={styles.option}>Female</option>
            <option value="other" className={styles.option}>Other</option>
          </select>
          {errors.gender && <span className={styles.span}>{errors.gender.message}</span>}
        </label>
        <label className={styles.label}>
          <p>Comment:</p>
          <textarea {...register('comment')} className={styles.textarea} placeholder='Leave a comment...' />
        </label>
          {errors.comment && <span className={styles.span}>{errors.comment.message}</span>}
        <button type="submit" className={styles.button}>Submit</button>
      </form>
    </div>
  );
};

export default Third;


