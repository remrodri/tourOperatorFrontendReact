import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

// eslint-disable-next-line react-refresh/only-export-components
const MySwal = withReactContent(Swal);

export const showUserInfoModal = (user: {
  firstName: string;
  lastName: string;
  ci: string;
  email: string;
  role: string;
  phone: string;
}) => {
  MySwal.fire({
    title: `<strong>Informacion del usuario</strong>`,
    html: `<div >
        <p>
          <strong>Nombre:</strong> ${user?.firstName}
        </p>
        <p>
          <strong>Apellido:</strong> ${user?.lastName}
        </p>
        <p>
          <strong>Email:</strong> ${user?.email}
        </p>
        <p>
          <strong>Telefono:</strong> ${user?.phone}
        </p>
        <p>
          <strong>CI:</strong> ${user?.ci}
        </p>
        <p>
          <strong>Cargo:</strong> ${user?.role}
        </p>
      </div>`,
    showCloseButton: true,
    focusConfirm: false,
    confirmButtonText: "Cerrar",
    customClass: {
      popup: "custom-swal-popup",
      confirmButton: "custom-swal-confirm-button",
    },
    width: "400px",
  });
};
