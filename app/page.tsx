import { BoltIcon, ExclamationTriangleIcon, SunIcon } from '@heroicons/react/24/outline';

const page = () => {
  return (
    <main className="flex flex-col items-center justify-center h-screen px-2 text-white">
        <h1 className="mb-20 text-5xl font-bold">Claire AI</h1>

        <section className="flex space-x-2 text-center">
            <div className="">
                <div className="flex flex-col items-center justify-center mb-5">
                    {/* sun icon */}
                    <SunIcon className="w-8 h-8" />
                    <h3>Examples</h3>
                </div>
                <div className="space-y-2">
                    <p className="infoText">"Explain Something to me"</p>
                    <p className="infoText">"What is the difference between a dog and a cat?"</p>
                    <p className="infoText">"What is the color of the sun?"</p>
                </div>
            </div>

            <div className="">
                <div className="flex flex-col items-center justify-center mb-5">
                    {/* sun icon */}
                    <BoltIcon className="w-8 h-8" />
                    <h3>Capabilities</h3>
                </div>
                <div className="space-y-2">
                    <p className="infoText">"Change the OpenAI model to use"</p>
                    <p className="infoText">"Messages are stored so they can be viewed"</p>
                    <p className="infoText">"Hot toast notifications when ClaireAI is thinking..."</p>
                </div>
            </div>

            <div className="">
                <div className="flex flex-col items-center justify-center mb-5">
                    {/* sun icon */}
                    <ExclamationTriangleIcon className="w-8 h-8" />
                    <h3>Limitations</h3>
                </div>
                <div className="space-y-2">
                    <p className="infoText">"May occassionally generate incorect information"</p>
                    <p className="infoText">"May occassionally produce harmful instructions or biased content"</p>
                    <p className="infoText">"Limited knowledge of world and events after 2021"</p>
                </div>
            </div>
        </section>
    </main>
  )
}

export default page;