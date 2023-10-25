import { SimpleContainer } from "../components/simpleContainer";
import { BackButton } from "../components/backButton";
import { CustomizedSteppers } from "../components/stepper";
import { UploadFile } from "../components/upload-card";
import { CreateCvCard } from "../components/create-card";
import { PinkButton } from "../components/pink-button";
//import { WhiteButton } from "../components/whiteButton"; 'Mostrar en la otra vista'
// import { SuccessAlert } from "../components/successAlert"; 'Modales a mostrar con javascript'
//import { WarningAlert } from "../components/warningAlert"; idem
export function UploadCv() {
  //vista principal
  return (
    <>
      <BackButton />
      <CustomizedSteppers />
      <SimpleContainer>
        <UploadFile />
        <CreateCvCard />
      </SimpleContainer>
      <PinkButton />
    </>
  );
}
