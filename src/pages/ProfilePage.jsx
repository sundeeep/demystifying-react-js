import useUserStore from '../stores/useUserStore'

const ProfilePage = () => {
  const currentUser = useUserStore((state) => state.user)
  return (
    <div>
      {
        currentUser.name
      }
    </div>
  )
}

export default ProfilePage