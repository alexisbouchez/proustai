import * as React from 'react'
import MainLayout from '~/components/main_layout'
import Spinner from '~/components/spinner'
import ExplorerPricingCard from '~/concerns/marketing/components/pricing/explorer_pricing_card'
import WriterPricingCard from '~/concerns/marketing/components/pricing/writer_pricing_card'
import UpgradeDialog from '../components/upgrade_dialog'
import useUser from '~/hooks/use_user'

interface ShowProps {}

const Show: React.FunctionComponent<ShowProps> = () => {
  const [loading, setLoading] = React.useState(false)
  const [open, setOpen] = React.useState(false)
  const user = useUser()

  return (
    <MainLayout
      header={
        <div className="horizontal space-x-8 mx-2 mt-10 mb-4">
          <h1 className="text-3xl font-bold">Billing</h1>
          <a
            href="/billing/manage"
            className="primary-btn !bg-white !text-black"
            onClick={() => setLoading(true)}
          >
            {loading && <Spinner className="h-4 w-4" />}
            <span>Manage your subscription</span>
          </a>
        </div>
      }
    >
      <UpgradeDialog open={open} setOpen={setOpen} />

      <div className="vertical sm:horizontal gap-8">
        <div>
          <ExplorerPricingCard />
        </div>
        <div>
          <WriterPricingCard>
            <button
              className="primary-btn mt-4"
              onClick={() => setOpen(true)}
              disabled={user.activePaidSubscription}
            >
              Upgrade
            </button>
          </WriterPricingCard>
        </div>
      </div>
    </MainLayout>
  )
}

export default Show
