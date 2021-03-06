const { I } = inject();

export const DoctorsPage = {
  elements: {
    searchField: {
      css: '[data-qaid="input_doctorSearchKeyword"]',
    },
    searchButton: {
      css: '.sidecon-forward',
    },
    searchResultList: {
      css: '[data-qaid="info_doctorList"]',
    },
    zipcode: {
      css: '[data-qaid="input_location"]',
    },
    zipcodeFirstDropdown: {
      css: '[data-qaid="info_locSuggestion_0"]',
    },
  },

  /**
   * A function to search for a doctor
   * @param doctor: doctors name
   * @param zipcode: area of search
   */
  async searchForDoctor(doctor: string, zipcode: string): Promise<void> {
    I.clearField(this.elements.zipcode);
    I.fillField(this.elements.zipcode, zipcode);
    I.click(this.elements.zipcodeFirstDropdown);
    I.fillField(this.elements.searchField, doctor);
    I.click(this.elements.searchButton);
  },

  /**
   * A function to search for a doctor
   * @param doctor: doctors name
   * @param specialty:doctors speciality
   * @param address:doctors address
   */
  async verifyDoctor(
    doctor: string,
    specialty: string,
    address: string
  ): Promise<void> {
    I.see(doctor, this.elements.searchResultList);
    I.see(specialty, this.elements.searchResultList);
    I.see(address, this.elements.searchResultList);
  },
};

export default DoctorsPage;
