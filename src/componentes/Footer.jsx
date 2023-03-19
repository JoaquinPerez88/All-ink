import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBFooter className='bg-black text-center text-white'>
      <MDBContainer className='p-4 pb-0'>
        <section className='mb-4'>
          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='facebook-f' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='twitter' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='google' />
          </MDBBtn>
          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='instagram' />
          </MDBBtn>


        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'black' }}>
        © 2023 Copyright: Joaquín Pérez

        <a className='text-white' href='https://futurapagina.com/'>
          
        </a>
        
      <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
       <MDBIcon fab icon='github' />
       </MDBBtn>

     
      </div>
    </MDBFooter>
  );
}