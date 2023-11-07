import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
  name: z.string().min(3).max(50).nonempty(),
  dob: z.string(),
  email: z.string().email(),
  gender: z.enum(['male', 'female', 'other']),
  grade: z.number().min(1).max(12),
  number: z.string().regex(/^\d{10}$/),
  comment: z.string().optional(),
});

const Third = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        Name:
        <input {...register('name')} />
        {errors.name && <span>{errors.name.message}</span>}
      </label>
      <label>
        Date of Birth:
        <input type="date" {...register('dob')} />
        {errors.dob && <span>{errors.dob.message}</span>}
      </label>
      <label>
        Email:
        <input type="email" {...register('email')} />
        {errors.email && <span>{errors.email.message}</span>}
      </label>
      <label>
        Gender:
        <select {...register('gender')}>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        {errors.gender && <span>{errors.gender.message}</span>}
      </label>
      <label>
        Grade:
        <input type="number" {...register('grade')} />
        {errors.grade && <span>{errors.grade.message}</span>}
      </label>
      <label>
        Phone Number:
        <input type="text" {...register('number')} />
        {errors.number && <span>{errors.number.message}</span>}
      </label>
      <label>
        Comment:
        <textarea {...register('comment')} />
        {errors.comment && <span>{errors.comment.message}</span>}
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Third;


