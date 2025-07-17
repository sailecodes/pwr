import { Star } from "lucide-react";

export default function LandingITClients() {
  return (
    <section className="px-4">
      <div className="mx-auto max-w-7xl min-w-[325px]">
        <header className="mb-5 text-center text-lg font-bold sm:text-left sm:text-2xl">Most Recent Clients</header>
        <div className="sm:flex sm:gap-8">
          <div>
            <img
              src={"/landing/landing-clients-1.jpg"}
              className="rounded-3xl object-cover"
              alt="Client 1"
            />
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel maxime ad ullam maiores sequi ducimus
                accusantium ipsa libero rem placeat, eveniet, eum necessitatibus sed iusto mollitia recusandae aperiam
                adipisci. Sequi.
              </p>
              <div className="flex justify-between">
                <p>- Company, Name</p>
                <div className="flex">
                  {Array.from([1, 2, 3, 4, 5]).map((ind) => (
                    <Star
                      key={ind}
                      className="fill-amber-300 stroke-amber-300"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex gap-4">
              <img
                src={"/landing/landing-clients-1.jpg"}
                className="h-[150px] w-[150px] rounded-3xl object-cover"
                alt="Client 1"
              />
              <div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur autem voluptas cumque quasi
                  error fugit eos dignissimos, delectus id facilis, officia illo sequi tempore odio animi ab accusantium
                  illum dolores!
                </p>
                <div>
                  <p>- Company, Name</p>
                  <div className="flex">
                    {Array.from([1, 2, 3, 4, 5]).map((ind) => (
                      <Star
                        key={ind}
                        className="fill-amber-300 stroke-amber-300"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <img
                src={"/landing/landing-clients-1.jpg"}
                className="h-[150px] w-[150px] rounded-3xl object-cover"
                alt="Client 1"
              />
              <div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur autem voluptas cumque quasi
                  error fugit eos dignissimos, delectus id facilis, officia illo sequi tempore odio animi ab accusantium
                  illum dolores!
                </p>
                <div>
                  <p>- Company, Name</p>
                  <div className="flex">
                    {Array.from([1, 2, 3, 4, 5]).map((ind) => (
                      <Star
                        key={ind}
                        className="fill-amber-300 stroke-amber-300"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
