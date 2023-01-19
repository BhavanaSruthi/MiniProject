import React from "react";
function FilterBy() {
  return (
    <div style={{ position: "fixed" }}>
      <p style={{ marginLeft: "20px" }}>Filter By</p>
      <div class="accordion accordion-flush " id="accordionFlushExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingOne">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              <p>Collection</p>
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            class="accordion-collapse collapse"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              <ul style={{ listStyle: "none", textDecoration: "none" }}>
                <a href="#">
                  <li>Lounge</li>
                </a>
                <a href="#">
                  <li>Chair</li>
                </a>
                <a href="#">
                  <li>Shelves</li>
                </a>
                <a href="#">
                  <li>Table</li>
                </a>
              </ul>
            </div>
          </div>
        </div>

        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingTwo">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              <p>Color</p>
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="flush-headingTwo"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              <ul style={{ listStyle: "none", textDecoration: "none" }}>
                <a href="#">
                  <li>White</li>
                </a>
                <a href="#">
                  <li>Brown</li>
                </a>
                <a href="#">
                  <li>Black</li>
                </a>
                <a href="#">
                  <li>Burlywood</li>
                </a>
              </ul>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingThree">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
              <p>Category</p>
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            class="accordion-collapse collapse"
            aria-labelledby="flush-headingThree"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              <ul style={{ listStyle: "none", textDecoration: "none" }}>
                <a href="#">
                  <li>Lounge</li>
                </a>
                <a href="#">
                  <li>Chair</li>
                </a>
                <a href="#">
                  <li>Shelves</li>
                </a>
                <a href="#">
                  <li>Table</li>
                </a>
              </ul>
            </div>
          </div>
          <div class="accordion-item mb-0">
            <h2 class="accordion-header" id="flush-headingFour">
              <button class="accordion-button collapsed" aria-expanded="false">
                <p>Price Range</p>
              </button>
            </h2>
            <div id="flush-collapseFour">
              <div class="accordion-body"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="range ">
        <input type="range" class="form-range" id="customRange1" />
        <div class="row">
          <p class="col-6">
            <small>
              <small>$1300</small>
            </small>
          </p>
          <p class="col-6" style={{ float: "right" }}>
            <small>
              <small>$10,000+</small>
            </small>
          </p>
        </div>
      </div>
    </div>
  );
}
export default FilterBy;
