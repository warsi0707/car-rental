import * as motion from "motion/react-client";

function StarterPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2 }}
      className="min-h-screen w-full flex flex-col justify-center items-center text-2xl text-center sm:text-6xl gap-8 mt-10"
    >
      <h1>From Key to the road </h1>
      <h1>
        the journey <strong className="text-red-600">starts</strong> here
      </h1>
      <h1>Hit the road with style and ease</h1>
      
    </motion.div>
  );
}

export default StarterPage;
