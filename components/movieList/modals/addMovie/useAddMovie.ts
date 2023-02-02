import { useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from 'react-query';
import { useDispatch, useSelector } from 'react-redux';
import { addMovie } from 'services';
import { closeAddMovieModal } from 'stores/modalSlice';
const useAddMovie = () => {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const { name } = useSelector((store: any) => store.user);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'all',
  });
  const { mutate: submitForm } = useMutation(addMovie, {
    onSuccess: () => {
      queryClient.invalidateQueries('movies');
      dispatch(closeAddMovieModal());
    },
  });
  const onSubmit = async (data: any) => {
    const updatedData = {
      ...data,
      image: data.image[0],
    };
    submitForm(updatedData, {
      onError: () => {},
    });
  };

  return { dispatch, errors, register, onSubmit, handleSubmit, name };
};

export default useAddMovie;