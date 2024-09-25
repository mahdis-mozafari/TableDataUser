
import ModalEport from "@/component/ExportModal";
import ModalImport from "@/component/ImportModal";
import BasicTable from "@/component/Table";
import { Stack } from "@mui/material";


export default function Home() {
 

return (
<>
<Stack spacing={2} direction="row" justifyContent={'space-around'} >
   <ModalImport/>
   <ModalEport/>
            </Stack>
   
    <BasicTable/>
</>
  );
}
