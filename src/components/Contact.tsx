import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

const Contact = () => {
  return (
    <section className="container mx-auto px-4 py-16" id="contact">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-5">
          <h2 className="text-gray-700 text-4xl mb-4">Get In Touch</h2>
          <p className="mb-4">
            I love hearing from other fans that travel and support their teams, whether it's for the Packers or
            against. If you know of any hidden gems in and around the 32 stadiums, please reach out and share
            your story.
          </p>
          <p className="mb-4">
            I'll keep you posted on where we are traveling each year, if you are around send a message and maybe
            we will see you there.
          </p>
          <p className="mb-4">
            If you need any advice while visiting Lambeau Field, I have that too.
          </p>
          <p>
            As always <span className="text-green-700 text-2xl">Go Pack Go!</span>
          </p>
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <form action="https://formspree.io/f/mbjpnwek" method="POST" className="space-y-6 bg-white p-8 rounded-lg shadow-lg border border-gray-200">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-green-700 font-semibold">
                Your Email *
              </Label>
              <Input
                type="email"
                name="email"
                id="email"
                placeholder="your.email@example.com"
                className="border-gray-300 focus:border-green-700 focus:ring-green-700"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-green-700 font-semibold">
                Your Message *
              </Label>
              <Textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Tell me about your Packers experience or ask about visiting Lambeau..."
                className="border-gray-300 focus:border-green-700 focus:ring-green-700 resize-none"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="date" className="text-green-700 font-semibold">
                What game are you going to?
              </Label>
              <Input
                type="text"
                name="date"
                id="date"
                placeholder="e.g., Week 5 vs Bears"
                className="border-gray-300 focus:border-green-700 focus:ring-green-700"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-green-700 hover:bg-green-800 text-white font-semibold py-6 text-lg"
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
