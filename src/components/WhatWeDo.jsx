export default function WhatWeDo() {
  return (
    <section className="py-5" id="what">
      <h3 className="fw-bold">What We Do</h3>

      <div className="row mt-3">
        <div className="col-md-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5>Weekly Meals</h5>
              <p>Fresh food distributed every week.</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5>Care Packs</h5>
              <p>Includes fruits, biscuits, and essentials.</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5>Festival Meals</h5>
              <p>Special food served during festivals.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
