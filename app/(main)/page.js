// app/(main)/page.js

import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "The International School Ltd Secondary | Excellence in Education",
  description:
    "The International School Ltd Secondary provides high-quality secondary education in Sierra Leone, focusing on academic excellence, digital literacy, and strong moral values.",
};

export default function HomePage() {
  return (
    <div className="homepage-content">

      {/* =====================================================
          1. HERO SECTION
      ====================================================== */}
     <section className="relative h-[80vh] flex items-end text-white">

  {/* Background Image */}
  <Image
    src="/images/schoolbgInt.jpg"
    alt="The International School Ltd Secondary Campus"
    fill
    priority
    className="object-cover"
    sizes="100vw"
  />

  {/* Bottom Gradient Overlay */}
  <div className="absolute inset-0  from-blue-950/80 via-blue-900/40 to-transparent"></div>

  {/* Text Content */}
  <div className="relative z-10 w-full pb-14 px-6">
    <div className="max-w-4xl mx-auto text-center">

      <p className="text-x md:text-2xl mb-6 font-light drop-shadow-lg">
        Shaping disciplined, knowledgeable, and digitally skilled students in Sierra Leone.
      </p>

      <Link
        href="/about"
        className="inline-block bg-green-500 hover:bg-green-600 text-white text-sm font-semibold px-8 py-3 rounded-full shadow-xl transition duration-300"
      >
        Learn More About Our School
      </Link>

    </div>
  </div>
</section>


      {/* =====================================================
    PRINCIPAL’S MESSAGE
====================================================== */}
<section className="py-20 bg-white">
  <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

    {/* Principal Image */}
    <div className="flex justify-center">
      <Image
        src="/images/principal.jpg"
        alt="Principal of The International School Ltd Secondary"
        width={400}
        height={450}
        className="rounded-2xl shadow-xl object-cover"
      />
    </div>

    {/* Message */}
    <div>
      <h2 className="text-3xl font-bold text-blue-800 mb-4">
        Message from the Principal
      </h2>

      <p className="text-gray-700 leading-relaxed mb-4">
        Welcome to <strong>The International School Ltd Secondary</strong>,
        where we are committed to nurturing disciplined, confident, and
        academically excellent students.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        Our school stands on strong moral values, respect, and a passion for
        learning. We prepare our students not only for <strong>BECE and WAEC</strong>,
        but also for life, leadership, and responsible citizenship in Sierra Leone
        and beyond.
      </p>

      <p className="text-gray-700 leading-relaxed">
        We warmly invite parents and guardians to partner with us as we shape
        the future leaders of our nation.
      </p>

      <p className="mt-6 font-semibold text-blue-900">
        — The Principal
      </p>
    </div>

  </div>
</section>


      {/* =====================================================
          2. EDUCATIONAL PILLARS
      ====================================================== */}
      <section className="py-16 bg-gray-50 text-center">
        <h2 className="text-3xl font-bold text-blue-800 mb-10">
          Our Educational Pillars
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
          
          <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
            <h3 className="text-2xl font-semibold text-blue-600 mb-3">
              Academic Excellence
            </h3>
            <p className="text-gray-600">
              Delivering a strong secondary curriculum aligned with national and international standards.
            </p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
            <h3 className="text-2xl font-semibold text-blue-600 mb-3">
              Character & Discipline
            </h3>
            <p className="text-gray-600">
              Instilling moral values, leadership skills, and discipline in every student.
            </p>
          </div>

          <div className="p-6 bg-white rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
            <h3 className="text-2xl font-semibold text-blue-600 mb-3">
              Technology & Innovation
            </h3>
            <p className="text-gray-600">
              Integrating modern technology to support learning and digital readiness.
            </p>
          </div>

        </div>
      </section>

      {/* =====================================================
          3. NEWS & EVENTS
      ====================================================== */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-blue-800 mb-8 border-b-2 border-green-500 pb-2">
          School News & Announcements
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="bg-white p-6 shadow-md rounded-lg hover:shadow-xl transition">
            <h3 className="text-xl font-bold mb-2">
              Admissions Open for 2026 Academic Year
            </h3>
            <p className="text-gray-600">
              Applications are now open for Junior and Senior Secondary classes.
            </p>
            <Link href="/admissions" className="text-green-600 hover:text-green-700 mt-2 inline-block">
              Read More &rarr;
            </Link>
          </div>

          <div className="bg-white p-6 shadow-md rounded-lg hover:shadow-xl transition">
            <h3 className="text-xl font-bold mb-2">
              Term 1 Parent–Teacher Meeting
            </h3>
            <p className="text-gray-600">
              Parents are invited to discuss student progress and academic performance.
            </p>
            <Link href="/calendar" className="text-green-600 hover:text-green-700 mt-2 inline-block">
              View Schedule &rarr;
            </Link>
          </div>

        </div>
      </section>

      {/* =====================================================
    EXAMINATION & ACADEMIC FOCUS
====================================================== */}
<section className="py-16 bg-green-50 text-center">
  <h2 className="text-3xl font-bold text-blue-800 mb-6">
    Strong Academic & Examination Focus
  </h2>

  <p className="max-w-4xl mx-auto text-gray-700 text-lg px-6">
    At The International School Ltd Secondary, we place strong emphasis on
    continuous assessment, mock examinations, and excellent preparation for
    <strong> BECE and WASSCE (WAEC)</strong>. Our goal is outstanding results
    and well-prepared students.
  </p>
</section>


      {/* =====================================================
          4. STUDENT PORTAL CTA
      ====================================================== */}
      <section className="bg-blue-950 py-12">
        <div className="max-w-4xl mx-auto text-center p-6">
          
          <h2 className="text-3xl font-bold text-white mb-4">
            Student & Parent Portal
          </h2>

          <p className="text-white/80 text-lg mb-6">
            Access results, timetables, announcements, and academic records securely online.
          </p>

          <Link
            href="/login"
            className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 text-lg font-bold px-8 py-3 rounded-full shadow-2xl transition duration-300"
          >
            Login to Portal
          </Link>

        </div>
      </section>

    </div>
  );
}
