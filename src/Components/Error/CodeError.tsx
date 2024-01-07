import "./style.css";

export const CodeError = ({ error }: any) => {
  return (
    <div>
      <section id="page_404">
        <div id="container">
          <div id="row">
            <div className="col-sm-12 ">
              <div className="col-sm-10 col-sm-offset-1  text-center">
                <div id="four_zero_four_bg">
                  <h1 className="text-center ">404</h1>
                </div>

                <div id="contant_box_404">
                  <p>{error.message}</p>

                  <a href="" id="link_404">
                    Go to Home
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
