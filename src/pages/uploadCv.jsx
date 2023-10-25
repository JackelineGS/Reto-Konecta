import { SimpleContainer } from "../components/simpleContainer";
import { BackButton } from "../components/backButton";
import { Navbar } from "../components/navbar";
import { CustomizedSteppers } from "../components/stepper";
import { UploadFile } from "../components/upload-card";
import { CreateCvCard } from "../components/create-card";

export function UploadCv() {
  //vista principal
  return (
    <>
      <Navbar />
      <BackButton />
      <CustomizedSteppers />
      <SimpleContainer>
        <UploadFile />
        <CreateCvCard />
      </SimpleContainer>
    </>
  );
}
