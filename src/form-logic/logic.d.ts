declare module '../../form-logic/logic.js' {
    // Declare the types exported by your JavaScript module
    export interface FormLogic {
      formData: {
        state: string;
        district: string;
        feeder: string;
        date: string;
        time: string;
        energyBilled: string;
        energyReceived: string;
        revenueBilled: string;
        collections: string;
        hoursOfSupply: string;
      };
      setFormData: React.Dispatch<React.SetStateAction<{
        state: string;
        district: string;
        feeder: string;
        date: string;
        time: string;
        energyBilled: string;
        energyReceived: string;
        revenueBilled: string;
        collections: string;
        hoursOfSupply: string;
      }>>;
      updateFeederAndDistrict: (selectedState: string) => void;
      handleSubmit: (data: any) => any;
    }
  }
  