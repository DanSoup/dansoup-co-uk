const nameToUrl = name => {
  return name.replace(/[^a-zA-Z0-9 \-_]/g, '').replace(/ /g, '-').toLowerCase();
};

export default nameToUrl;