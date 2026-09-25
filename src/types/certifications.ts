export type CertificationModule = {
  code: string;
  name: string;
};

export type CertificationsScheme = {
  code: string;
  name: string;
  // issuing_body: string;
  renewal_years: number;
  modules: CertificationModule[];
  // prerequisites: string[];
  // notes: string;
};
