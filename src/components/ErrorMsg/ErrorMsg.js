import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import { resetErrAction } from "../../redux/slices/globalActions/globalActions";

const ErrorMsg = ({ message }) => {
  const dispatch = useDispatch();
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    if (message && !isShown) {
      Swal.fire({
        icon: "error",
        title: "¡Upss!..",
        text: message,
      }).then(() => {
        setIsShown(true);
        dispatch(resetErrAction());
      });
    }
  }, [message, isShown, dispatch]);

  return null;
};


  /* const [isVisible, setIsVisible] = useState(true); */

  

    /* // Establece isVisible en false después de un tiempo
    const timer = setTimeout(() => {
      setIsVisible(false);
      // Reinicia el estado de error después de ocultar el mensaje
      dispatch(resetErrAction());
    }, 5000); // Cambia 5000 a la cantidad de milisegundos que desees que el mensaje esté visible

    // Limpia el temporizador al desmontar el componente
    return () => clearTimeout(timer);
  }, [dispatch, message]); // Dependencias actualizadas

  return isVisible ? null : <div />;
}; */

export default ErrorMsg;
