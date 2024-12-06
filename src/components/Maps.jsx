const Maps = () => {
  return (
    <section className="w-full h-[250px] sm:h-[350px] md:h-[450px] relative" id='lokasi'>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d991.6001931134891!2d106.8873904!3d-6.2107554!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNsKwMTInNDEuMyJTIDEwNsKwNTMnMTUuMyJF!5e0!3m2!1sen!2sid!4v1733386054631!5m2!1sen!2sid"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="absolute top-0 left-0 w-full h-full"
      ></iframe>
    </section>
  );
};

export default Maps;
