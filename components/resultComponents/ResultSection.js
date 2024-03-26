import React from 'react'

const ResultSection = () => {
  return (
    <div class="row" style={{justifyContent: "space-evenly"}}>
      <div
        class="col-md-6 col-lg-4 mb-4 border border-secondary mt-5"
      >
        <div class="teacher text-center">
          <img
            src="./cetStudent.jpeg"
            alt="Image"
            class="img-fluid w-50 rounded-circle  mb-4"
            
          />
          <div class="py-2">
            <h3 class="text-black">Benjamin Stone</h3>
            <p class="position">Physics Teacher</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
              eius suscipit delectus enim iusto tempora, adipisci at provident.
            </p>
          </div>
        </div>
      </div>

      <div
        class="col-md-6 col-lg-4 mb-4 mt-5 border border-secondary"
        
      >
        <div class="teacher text-center">
          <img
            src="./neetStudent.jpeg"
            alt="Image"
            class="img-fluid w-50 rounded-circle mx-auto mb-4"
          />
          <div class="py-2">
            <h3 class="text-black">Katleen Stone</h3>
            <p class="position">Physics Teacher</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
              eius suscipit delectus enim iusto tempora, adipisci at provident.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}

export default ResultSection