import { SimpleContainer } from "../components/simpleContainer";
import { CustomizedSteppers } from "../components/stepper";
import { UploadFile } from "../components/upload-card";
import { CreateCvCard } from "../components/create-card";
import { PinkButton } from "../components/pink-button";
//import { WhiteButton } from "../components/whiteButton"; 'Mostrar en la otra vista'
// import { SuccessAlert } from "../components/successAlert"; 'Modales a mostrar con javascript'
//import { WarningAlert } from "../components/warningAlert"; idem
//import { ErrorAlertCv } from "../components/errorAlertCV";
//import { ErrorAlert } from "../components/errorAlert";
//import { BasicModal } from "../components/modal";
//import ModalCursos from "../components/modalCursos";

export function UploadCv() {
  return (
    <>
      <CustomizedSteppers />
      <SimpleContainer>
        <UploadFile />
        <CreateCvCard />
      </SimpleContainer>
      <PinkButton />
    </>
  );
}
