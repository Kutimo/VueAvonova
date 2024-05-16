import { useToast } from 'vue-toastification'
import { supabase } from './supabaseClient'

export const signOut = async () => {
  const toast = useToast()
  try {
    const { error } = await supabase.auth.signOut()
    if (error) {
      alert(error.message)
    } else {
      window.location.reload()
    }
  } catch (error) {
    toast.error(error)
  }
}
